const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const prefixer = require("postcss-prefix-selector");

const scopeSelector = ".racm-root";

module.exports = {
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
