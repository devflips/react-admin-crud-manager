import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import prefixer from "postcss-prefix-selector";

const scopeSelector = ".racm-root";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    prefixer({
      prefix: scopeSelector,
      transform: (prefix, selector, prefixedSelector) => {
        if ([":root", "html", "body"].includes(selector)) {
          return prefix;
        }

        if (selector.startsWith(".dark ")) {
          return `.dark ${prefix} ${selector.slice(6)}`;
        }

        return prefixedSelector;
      },
    }),
  ],
};
