module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        {
          "extensions": [".jsx", ".js"]
        }
      ],
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/forbid-prop-types": "off",
      "radix": "off"
    }
};
