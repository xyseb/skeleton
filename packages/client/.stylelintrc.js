'use strict';

/**
 * Fichier de configuration du linter stylelint v9.0.0
 *
 * L'usage de stylelint dispose de rules.
 *    Celle-ci sont surcharger par stylelint-config-recommended
 *    Celle-ci sont surcharger par stylelint-config-standard
 *
 * L'usage du plugin stylelint-scss ajoute d'avantage de rules aux rules précédente
 *     Ce plugin est introduit par stylelint-config-recommended-scss et ne recommande par sont usage ici.
 *
 * L'usage de stylelint-config-standard-scss etandant stylelint-config-standard & stylelint-config-recommended-scss
 *     Cette surcharge inclus donc l'utilisation implicite des plugins stylelint-css & postcss-scss et
 *     surcharge stylelint-config-recommended. C'est la surcharge la plus standard de ce fait.
 *
 *
 * L'usage de stylelint-no-unsupported-browser-features permet de lever des avertissements sur la compatibilité avec
 * les navigateurs inclus dans notre couverture browserslist
 */
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
    ],
    plugins: [
        "stylelint-no-unsupported-browser-features"
    ],
    rules: {
        "no-invalid-position-at-import-rule": null,
        "plugin/no-unsupported-browser-features": [true, {
            "severity": "warning",
            "ignorePartialSupport": false
        }],
        "scss/at-mixin-argumentless-call-parentheses": null
    },
    overrides: [
    ],
    ignoreFiles: ["**/Theme/**/*.scss"]
};