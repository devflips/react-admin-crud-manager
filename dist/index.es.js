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
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, g = {
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
    }, p = ((u = g[a]) == null ? void 0 : u[i]) || g.default.contained, v = c[d], m = `
      ${S} 
      ${p} 
      ${v} 
      ${l ? "w-full" : ""} 
      ${o}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: f,
        type: t.type || "button",
        className: m,
        ...t,
        children: s
      }
    );
  }
);
X.displayName = "Button";
function q({ label: o, required: i = !1, infoText: a = "" }) {
  return /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    o,
    i && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" }),
    a && /* @__PURE__ */ b("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(Qe, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ e(
        "span",
        {
          className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
          children: a
        }
      )
    ] })
  ] }) });
}
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
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: V, children: V })
        }
      ),
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
              {
                className: `w-4 h-4 transition-transform ${y ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      y && /* @__PURE__ */ b(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${L ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            f && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ b("div", { className: "relative", children: [
              /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: F,
                  type: "text",
                  value: A,
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
                  maxHeight: m || ""
                },
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
              }
            )
          ]
        }
      )
    ] })
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
        "input",
        {
          type: "checkbox",
          ref: S,
          className: "sr-only peer",
          checked: l,
          onChange: (c) => s(c.target.checked),
          disabled: t,
          ...f
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
              ${d}
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
Ge.displayName = "Switch";
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
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: u,
                onChange: O,
                required: t,
                disabled: s || !v,
                placeholder: v ? f : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: t,
                tabIndex: -1,
                readOnly: !0,
                value: v && u ? "+" + v.phone + u : "",
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
      y && /* @__PURE__ */ b("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        S && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ b("div", { className: "relative", children: [
          /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: A,
              onChange: (I) => U(I.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((I) => /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            onClick: () => B(I),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${I.code.toLowerCase()}.png`,
                  alt: I.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ b("span", { children: [
                I.label,
                " (+",
                I.phone,
                ")"
              ] })
            ]
          },
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
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
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
                      "img",
                      {
                        src: c.preview || c,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !d && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: N,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ e(oe, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    oe,
                    {
                      icon: "ri:image-add-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
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
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(N.key)) {
          N.preventDefault();
          return;
        }
      }
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
        setTimeout(() => {
          var y;
          (y = c.onChange) == null || y.call(c, { target: { value: N } });
        }, 100);
      }
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
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => v((N) => !N),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              oe,
              {
                icon: p ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, c.name) });
  }
);
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
        toolbar: v ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: t,
        content_style: `
            body {
                font-family: ${u};
            }
            `,
        ...N
      },
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
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: u.label
        }
      )
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
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: m,
              id: s,
              type: "file",
              accept: l,
              onChange: (O) => N(O.target.files),
              required: d && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
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
                    {
                      type: "button",
                      onClick: L,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
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
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: l,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: l,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e(Le, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (s) => s.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: o,
                alt: i,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
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
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
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
          ] })
        ]
      }
    )
  ] });
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
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
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
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}, De = {
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
        ] })
      ]
    }
  );
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
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
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
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${o ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ b("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: i,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Le, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
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
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              X,
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
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: g = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: p = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
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
    }
    return /* @__PURE__ */ e(
      Ve,
      {
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
                }
              ),
              Object.keys(J).length > 0 && /* @__PURE__ */ e("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ] })
          ] })
        ] })
      ] }),
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
            " of",
            " ",
            ee,
            " results"
          ] }),
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
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
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
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
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
          ))
        }
      ),
      document.body
    ),
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
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => i(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Le, { className: "w-6 h-6" })
              }
            )
          ] }),
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
                "..."
              ] }) : M.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
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
    }).finally(() => {
      S(!1);
    });
  };
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
      current_page: 1
    }))) : (M((R) => ({
      ...R,
      current_page: 1
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
        }
      }
    ),
    /* @__PURE__ */ e(
      Ce,
      {
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
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      Ce,
      {
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
          }
        )
      }
    ),
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
      {
        isOpen: J,
        onClose: () => {
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
          }
        )
      }
    )
  ] });
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
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (a) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: a })
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ e(Le, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
        children: o
      }
    );
  }
}
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
};
//# sourceMappingURL=index.es.js.map
